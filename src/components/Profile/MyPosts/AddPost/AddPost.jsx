import s from './AddPost.module.css';
import { Formik } from 'formik';

const AddPostForm = (props) => {
    return (
        <Formik
            initialValues={{ postText: '' }}
            onSubmit={(values, actions) => {
                props.addPost(values.postText);
                actions.setSubmitting(false);
                actions.resetForm({
                    values: {
                        postText: ''
                    }
                });
            }}>
            {({
                values,
                handleChange,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>

                    <textarea
                        name= 'postText'
                        className={s.textBox}
                        value={values.postText}
                        onChange={handleChange}
                    />

                    <button type="submit" disabled={isSubmitting}>
                        Say
                    </button>
                </form>
            )}
        </Formik>
    )
}

const AddPost = (props) => {
    return (
        <div>
            <AddPostForm {...props} />
        </div>
    )
}

export default AddPost;