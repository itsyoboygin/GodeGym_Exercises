const accounts = [
    {
        email: 'phucdoox@gmail.com',
        password: 'phucdo1812'
    },
    {
        email: 'mrbuon02@gmail.com',
        password: 'phucdoox'
    },
    {
        email: 'vyhankut3@gmail.com',
        password: 'bongiu'
    }
]

export function getAllAccounts(){
    return accounts;
}

// console.log(accounts.filter(account => account.email == 'phucdoox@gmail.com' && account.password == 'phucdo1812').length)