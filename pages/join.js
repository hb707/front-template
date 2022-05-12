const axios = require('axios')


const Join = () => {
    const onSubmit = async e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const nickname = e.target.nickname.value;
        console.log(email, password, nickname)
        const payload = { email, password, nickname }
        const baseURL = process.env.NODE_ENV === 'production' ? '54.180.147.166' : 'http://localhost:4000/'
        const response = await axios.post(baseURL + '/join', payload, {
            'Content-type': 'application/json',
            withCredentials: true,
        })
        console.log(response)
    }
    return (
        <form onSubmit={onSubmit}>
            <input type='text' name="email" placeholder="이메일입력" />
            <input type='text' name="password" placeholder="패스워드입력" />
            <input type='text' name="nickname" placeholder="닉네임입력" />
            <input type='submit' value='가입' />
        </form>
    )
}

export default Join