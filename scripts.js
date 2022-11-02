const Modal = {
    toggle() {
        document.querySelector('.modal-overlay').classList.toggle('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50012,
        date: '23/01/2022', 
    },
    {
        id: 2,
        description: 'Website',
        amount: 500001,
        date: '23/01/2022', 
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20090,
        date: '23/01/2022', 
    },
    {
        id: 4,
        description: 'App',
        amount: 20000,
        date: '23/01/2022', 
    },
]

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")
        value = Number(value) /100
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

const Transaction = {
    incomes() {

    },
    expenses() {

    },
    total() {

    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `

        return html
    }
}


transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})