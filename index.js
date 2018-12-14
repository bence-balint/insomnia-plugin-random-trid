module.exports.templateTags = [
    {
        name: 'transactionid',
        displayName: 'Random Transaction Id',
        description: 'Generate a random Transaction id',
        args: [
            {
                displayName: 'transaction_id',
                type: 'string',
            }
        ],
        async run(context) {
            return 'tr_' + parseInt(Math.random()*100000000);
        }
    }
];