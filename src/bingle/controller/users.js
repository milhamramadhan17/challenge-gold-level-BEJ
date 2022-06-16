const client = require('../../db');
const queriesUsers = require('../queries/queries.users')


const getUsers = (req, res) => {
    client.query(queriesUsers.getUsers, (err, results) => {
        if(err) throw err;
        return res.status(200).json(results.rows);

    });
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    

    client.query(queriesUsers.getUsersById, [id], (err, results) => {
        const noUserFound = !results.rows.length;
        if(noUserFound){
            return res.send("User does not exist in the database!");
        }else{
            return res.status(200).json(results.rows);
        }
    });
};

const addUsers = (req, res) => {
    const {name, email, password} = req.body;
    // chech if email exists
    client.query(queriesUsers.checkEmailExists, [email], (err, results) => {
        if (results.rows.length) {
            return res.send('Email already exists.');
        }

        //add users to database
        client.query(queriesUsers.addUsers,
            [name, email, password], (err, results) => {
                if (name && email && password){
                    return res.status(201).send("User Created Successfully!");
                }
                else {
                    return res.send("Please, there's something you haven't filled in yet")
                }
                
            })
        });
};

const login = (req, res) => {
    const {name, password} = req.body;
    
    client.query(queriesUsers.checkNameExists, [name, password], (err, results) => {
        if (results.rows.length) {
            return res.send('Login Succesfully'); 
        } else {
            return res.send('Username or password are wrong')
        }
    })
}
        
const removeUser = (req, res) => {
    const id = parseInt(req.params.id);

    client.query(queriesUsers.getUsersById, [id], (err, results) => {
        const noUserFound = !results.rows.length;
        console.log(noUserFound);
        if(noUserFound) {
            return res.send("User does not exist in the database!");
        };

        
        client.query(queriesUsers.removeUser,
            [id], (err, results) => {
            if (err) throw err; 
            return res.status(203).send("User removed successfully.");
            
        });
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;
    const {password} = req.body;
    const {email} = req.body;

    client.query(queriesUsers.getUsersById, [id], (err, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            return res.send("User does not exist in database!");
        };

        if (name) {
            pool.query(queriesUsers.updateUser, [name, id], (err, results) => {
                if (err) throw err;
                return res.status(201).send("Username updated successfully.");
            }); 
        }

        else if (password) {
            pool.query(queriesUsers.updateUser, [password, id], (err) => {
                if (err) throw err;
                return res.status(201).send("Password updated successfully.");
            })
        }

        else if (email) {
            pool.query(queriesUsers.updateUser, [email, id], (err) => {
                if (err) throw err;
                return res.status(201).send("Email updated successfully.");
            })
        }
        else {
            return res.send("not change happened")
        }

    });
};

module.exports = {
    getUsers,
    addUsers,
    login,
    getUsersById,
    updateUser,
    removeUser
}