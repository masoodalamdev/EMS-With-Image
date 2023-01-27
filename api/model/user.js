import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String,
    song: String,
	img: String
});

    // autoIncrement.initialize(mongoose.connection);
    // userSchema.plugin(autoIncrement.plugin, 'user');
    // we need to turn it into a model
    // const postUser = mongoose.model('user', userSchema);

    // export default postUser;

    const user = mongoose.model('user', userSchema);


    export default user;