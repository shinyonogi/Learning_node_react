import React, { useState } from 'react'
import "./Form.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const errors = {
    password: "",
    email: "",
    msg: ""
};

var state_mail = false;
var state_password = false;
var state_msg = false;

const validEmailRegex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

const validPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

function Form() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    //console.log(name)
    //console.log(password)
    //console.log(email)
    //console.log(msg)

    if (email !== "") {  
        if (validEmailRegex.test(email) === false) {
            errors.email = "有効なメールアドレスを入力してください"
        }else {
            errors.email = ""
            state_mail = true;
        }
    }else {
        errors.email = ""
    }

    if (password !== "") {
        if (validPasswordRegex.test(password) === false) {
            errors.password = "最低８文字、大文字、小文字、数字、記号"
        }else {
            errors.password = ""
            state_password = true

        }
    }else {
        errors.password = ""
    }

    if (msg !== "") {
        if (msg.length < 10) {
            errors.msg = "最低10文字入力してください"
        }else {
            errors.msg = ""
            state_msg = true
        }
    }else {
        errors.msg = ""
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))

        if(state_mail === true & state_msg === true & state_password === true) {
            console.log("everything typed in")
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Object.fromEntries(data.entries()))
            };
            fetch("/register", requestOptions)
                .then(response => {
                    console.log(response.status)
                    if(response.ok) {
                        console.log("Server said Ok")
                    }
                })
        }

    }

    return (
        <div className="registration-form">
            <form id="form" action="" method="GET" onSubmit={handleSubmit} noValidate>
                <div className="form-icon">
                    <span><i className="icon icon-lock"></i></span>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="name" name="name" placeholder="名前" required noValidate
                    onChange={e=>{setName(e.target.value)}}/>      
                </div>

                <div className="form-group">
                    <p className="text-center text-danger">{errors.email}</p>
                    <input type="text" className="form-control item" id="email" name="email" placeholder="メールアドレス" required noValidate
                    onChange={e=>{setEmail(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <p className="text-center text-danger">{errors.password}</p>
                    <input type="password" className="form-control item" id="password" name="password" placeholder="パスワード" required noValidate
                    onChange={e=>{setPassword(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <p className="text-center text-danger">{errors.msg}</p>
                    <textarea className="form-control item" id="msg" name="msg" rows="3" placeholder="なにか一言!" required noValidate
                    onChange={e=>{setMsg(e.target.value)}}></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-block create-account">ページに入る</button>
                </div>

            </form>
        </div>
    )
}

export default Form