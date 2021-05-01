const express = require('express');
const app = express();
const router = express.Router();
const {Clients, Accounts, transactions, account_types, transaction_types} = require('./models');

// --------  Middlewears   ----------

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine', 'pug');
app.use(router)

// ----------    GETS     -----------

router.get('/', (req,res) => {
  Clients.findAll({raw:true}).then(responseFindAll => {
    res.render('index',{responseFindAll, active: 'clients'});
  });
});

router.get('/accounts', (req, res) => {
  Accounts.findAll({raw:true}).then(responseFindAll => {
    res.render('accounts',{responseFindAll, active: 'accounts'});
  });
});

router.get('/transactions', (req, res) => {
  transactions.findAll({raw:true, nest: true}).then(responseFindAll => {
    res.render('transactions',{responseFindAll, active: 'transactions'});
  });
});

router.get('/accounts-type', (req, res) => {
  account_types.findAll({raw:true}).then(responseFindAll => {
    res.render('accounts_type',{responseFindAll, active: 'accounts_type'});
  });
});

router.get('/transactions-type', (req, res) => {
  transaction_types.findAll({raw:true}).then(responseFindAll => {
    res.render('transaction_types',{responseFindAll, active: 'transactions_type'});
  });
});


// -----------------------    GETS DELETE   ---------------------------

router.get('/client-delete/:id', (req,res) => {
  const paramId = req.params.id;
  Clients.destroy({where: {id: paramId}}).then(responseFindAll => {
    res.redirect('/');
  });
});

router.get('/account-delete/:id', (req,res) => {
  const paramId = req.params.id;
  Accounts.destroy({where: {id: paramId}}).then(responseFindAll => {
    res.redirect('/accounts');
  });
});

router.get('/account-type-delete/:id', (req,res) => {
  const paramId = req.params.id;
  account_types.destroy({where: {id: paramId}}).then(responseFindAll => {
    res.redirect('/accounts-type');
  });
});

router.get('/transaction-delete/:id', (req,res) => {
  const paramId = req.params.id;
  transactions.destroy({where: {id: paramId}}).then(responseFindAll => {
    res.redirect('/transactions');
  });
});

// ------------------------------  POSTS   ---------------------------------

router.post('/client-add', (req, res) => {
  const {first_name, last_name, email, telephone} = req.body;
  Clients.create({first_name, last_name, email, telephone})
  .then(responseCreate => res.redirect('/'));
});

router.post('/account-add', (req, res) => {
  const {account_no, client_id, balance, type} = req.body;
  Accounts.create({account_no, client_id, balance, type})
  .then(responseCreate => res.redirect('/accounts'));
});

router.post('/transaction-add', (req, res) => {
  const {account_ori, account_des, amount, transaction_type} = req.body;
  transactions.create({account_ori, account_des, amount, transaction_type, trans_date: Date()})
  .then(responseCreate => res.redirect('/transactions'));
});

router.post('/account_type-add', (req, res) => {
  const {name, description} = req.body;
  account_types.create({name, description})
  .then(responseCreate => res.redirect('/accounts-type'));
});

router.post('/transaction_type-add', (req, res) => {
  const {name, description} = req.body;
  transaction_types.create({name, description})
  .then(responseCreate => res.redirect('/transactions-type'));
});



router.post('/client-update/:id', (req,res) => {
  const paramId = req.params.id;
  const {first_name, last_name, email, telephone} = req.body;
  Clients.update({first_name, last_name, email, telephone}, 
    {where: {
      id: paramId
  }}).then(resUpdate => res.redirect('/'));
});

router.post('/account-update/:id', (req,res) => {
  const paramId = req.params.id;
  const {account_no, client_id, balance, type} = req.body;
  Accounts.update({account_no, client_id, balance, type}, 
    {where: {
      id: paramId
  }}).then(resUpdate => res.redirect('/accounts'));
});

router.post('/transaction-update/:id', (req,res) => {
  const paramId = req.params.id;
  const {account_ori, account_des, amount, transaction_type, trans_date} = req.body;
  transactions.update({account_ori, account_des, amount, transaction_type, trans_date}, 
    {where: {
      id: paramId
  }}).then(resUpdate => res.redirect('/transactions'));
});

router.post('/account-type-update/:id', (req,res) => {
  const paramId = req.params.id;
  const {name, description} = req.body;
  account_types.update({name, description}, 
    {where: {
      id: paramId
  }}).then(resUpdate => res.redirect('/accounts-type'));
});

router.post('/transaction-type-update/:id', (req,res) => {
  const paramId = req.params.id;
  const {name, description} = req.body;
  transaction_types.update({name, description}, 
    {where: {
      id: paramId
  }}).then(resUpdate => res.redirect('/transactions-type'));
});
 
console.log(process.env.PORT);

app.listen(process.env.PORT);