import React from 'react'

class footer extends React.Component{

    render(){
        return(
            <footer className='footer '>
                <div className='container'>
                    <h6 id='contactHeader'><br/><br/>Contact Details:</h6>
                    <p className='conatactDetails'>Email ID - f20190305@hyderabad.bits-pilani.ac.in </p>
                    <p className='contactDetails'>Ph.no: 7017572633</p>
                    <form action="mailto:f20190305@hyderabad.bits-pilani.ac.in" method="post" encType="text/plain" id='email-form'>
                        Name:<br/>
                        <input type="text" name="name" required></input><br/>
                        Message:<br/>
                        {/* <textarea id='message' required></textarea> <br/>      email doesn't send msg when typed in textbox but works fine with txt...why??*/}
                        <input type='text' name='message' required></input><br/>
                        E-mail ID:<br/>
                        <input type="email" name="mail" required></input><br/>          
                        <input type="submit" value="Send" required></input>
                        <input type='reset' value='Reset' required></input>
                    </form> 
                    <p className='footer-text' >© 2019-2020 Shaurya Atri | All rights reserved</p>
                </div>
            </footer>
        )
    }
}

export default footer;