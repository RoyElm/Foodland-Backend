const fs = require("fs");
const PDFDocument = require("pdfkit");
const path = require("path");

function createInvoice(order, path) {
    let doc = new PDFDocument({ size: "A4", margin: 50 });

    const invoice = {
        shipping: {
            name: `${order.user.firstName} ${order.user.lastName}`,
            address: order.addressToDeliver,
            city: order.cityToDeliver,
            dateToDeliver: order.dateToDeliver,
            country: "Israel"
        },
        shoppingCartItems: order.shoppingCartItems,
        totalPrice: order.totalPrice.toFixed(2),
        lastFourDigits: order.lastFourDigit,
        invoice_nr: order._id
    };
    
    generateHeader(doc);
    generateCustomerInformation(doc, invoice);
    generateInvoiceTable(doc, invoice);
    generateFooter(doc);

    doc.pipe(fs.createWriteStream("invoice/" + path));
    return doc;
}

function generateHeader(doc) {
    const absolutePath = path.join(__dirname, "..", "upload/images/open-image.jpg");
    doc
        .image(absolutePath, 1, 1, { width: 100 })
        .fillColor("#444444")
        .fontSize(20)
        .text("FoodLand", 110, 57)
        .fontSize(10)
        .text("FoodLand", 200, 50, { align: "right" })
        .text("Eilat 70", 200, 65, { align: "right" })
        .text("Holon, Israel", 200, 80, { align: "right" })
        .moveDown();
}

function generateCustomerInformation(doc, invoice) {
    doc
        .fillColor("#444444")
        .fontSize(20)
        .text("Deliver", 50, 160);

    generateHr(doc, 185);

    const customerInformationTop = 190;
    doc
        .fontSize(10)
        .text("Deliver Number:", 50, customerInformationTop)
        .font("Helvetica-Bold")
        .text(invoice.invoice_nr, 150, customerInformationTop)
        .font("Helvetica")
        .text("Order Date:", 50, customerInformationTop + 15)
        .text(formatDate(new Date()), 150, customerInformationTop + 15)
        .text("Total Price", 50, customerInformationTop + 30)
        .text(invoice.totalPrice + "$", 150, customerInformationTop + 30)
        .text("Card Last Four digits:", 50, customerInformationTop + 45)
        .text(invoice.lastFourDigits, 150, customerInformationTop + 45)
        .font("Helvetica-Bold")
        .text("Name:", 300, customerInformationTop)
        .text(invoice.shipping.name, 350, customerInformationTop)
        .font("Helvetica")
        .text("Address:", 300, customerInformationTop + 15)
        .text(invoice.shipping.address, 350, customerInformationTop + 15)
        .text(
            invoice.shipping.city +
            ", " +
            invoice.shipping.country,
            300,
            customerInformationTop + 30
        )
        .text("Date to deliver:", 300, customerInformationTop + 45)
        .text(new Date(invoice.shipping.dateToDeliver).toLocaleDateString(), 370, customerInformationTop + 45)
        .moveDown();

    generateHr(doc, 252);
}

function generateInvoiceTable(doc, invoice) {
    let i;
    const invoiceTableTop = 330;

    doc.font("Helvetica-Bold");
    generateTableRow(
        doc,
        invoiceTableTop,
        "Item",
        "Unit Cost",
        "Quantity",
        "Line Total"
    );
    generateHr(doc, invoiceTableTop + 20);
    doc.font("Helvetica");
    for (i = 0; i < invoice.shoppingCartItems.length; i++) {
        const item = invoice.shoppingCartItems[i];
        const position = invoiceTableTop + (i + 1) * 30;
        generateTableRow(
            doc,
            position,
            item.product.name,
            item.product.price.toFixed(2) + "$",
            item.quantity,
            (item.product.price * item.quantity).toFixed(2) + "$"
        );

        generateHr(doc, position + 20);
    }
    const subtotalPosition = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
        doc,
        subtotalPosition,
        "",
        "",
        "Total",
        invoice.totalPrice + "$"
    );
}

function generateFooter(doc) {
    doc
        .fontSize(10)
        .text(
            "Thanks for your purchase.",
            50,
            780,
            { align: "center", width: 500 }
        );
}

function generateTableRow(
    doc,
    y,
    item,
    unitCost,
    quantity,
    lineTotal
) {
    doc
        .fontSize(10)
        .text(item, 50, y)
        .text(unitCost, 280, y, { width: 90, align: "right" })
        .text(quantity, 370, y, { width: 90, align: "right" })
        .text(lineTotal, 0, y, { align: "right" });
}

function generateHr(doc, y) {
    doc
        .strokeColor("#aaaaaa")
        .lineWidth(1)
        .moveTo(50, y)
        .lineTo(550, y)
        .stroke();
}

function formatCurrency(cents) {
    return "$" + (cents / 100).toFixed(2);
}

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return day + "/" + month + "/" + year;
}

module.exports = {
    createInvoice
};