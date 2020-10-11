import React from 'react';
import { Button } from '@material-ui/core';
// import { email } from './.config.js';

function ContactForm() {
  const onClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Button
        onClick={onClick}
        style={{
          color: '#eacb48',
          backgroundColor: '#00a099',
        }}
      >
        Send Me an Email
      </Button>
    </div>
  );
  // const [state, setState] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });
  // const sendEmail = event => {
  //   event.preventDefault();
  //   axios
  //     .post('/send', { ...state })
  //     .then((data) => {
  //       setState({
  //         name: '',
  //         email: '',
  //         subject: '',
  //         message: ''
  //       });
  //     })
  //     .catch((err, data) => console.error(err, data));

  // };

  // const onInputChange = event => {
  //   const { name, value } = event.target;
  //   setState({
  //     ...state,
  //     [name]: value
  //   });
  // };
  // return (
  //   <div>
  //     <form onSubmit={sendEmail}>
  //       <FormGroup>
  //         <FormControl>
  //           <InputLabel>Name</InputLabel>
  //           <OutlinedInput
  //           type='text'
  //           name='name'
  //           value={state.name}
  //           placeholder='Enter your name'
  //           onChange={onInputChange}
  //           />
  //         </FormControl>
  //         <FormControl>
  //           <InputLabel>Email</InputLabel>
  //           <OutlinedInput
  //           type='text'
  //           name='email'
  //           value={state.email}
  //           placeholder='Enter your email address'
  //           onChange={onInputChange}
  //           />
  //         </FormControl>

  //         <FormControl>
  //           <InputLabel>Subject</InputLabel>
  //           <OutlinedInput
  //           type='text'
  //           name='subject'
  //           value={state.subject}
  //           placeholder='Enter the subject of your email'
  //           onChange={onInputChange}
  //           />
  //         </FormControl>
  //         <FormControl>
  //           <InputLabel>Message</InputLabel>
  //           <OutlinedInput
  //           style={{
  //             '&:focus':{

  //               borderColor: '#00a099',
  //               color: '#00a099'
  //             },
  //             '&:active':{

  //               borderColor: '#00a099',
  //               color: '#00a099'
  //             }

  //           }}
  //           multiline={true}
  //           rows={3}
  //           type='text'
  //           name='message'
  //           value={state.message}
  //           placeholder='Enter your message'
  //           onChange={onInputChange}
  //           />
  //         </FormControl>
  //       </FormGroup>
  //       <Button type='submit'>
  //         Submit
  //       </Button>
  //     </form>
  //   </div>
  // )
}

export default ContactForm;
