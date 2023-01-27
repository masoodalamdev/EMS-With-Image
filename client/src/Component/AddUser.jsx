import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography, Alert } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';
import FileInput from "./FileInput";


const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
    song: "",
	img: "",
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone, song, img } = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleInputState = (name, value) => {
		setUser((prev) => ({ ...prev, [name]: value }));
	};

    const addUserDetails = async() => {
        await addUser(user);
  
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FileInput
					name="img"
					label="Choose Image"
					handleInputState={handleInputState}
					type="image"
					value={img}
				/>
				<FileInput
					name="song"
					label="Choose Song"
					handleInputState={handleInputState}
					type="audio"
					value={song}
				/>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;