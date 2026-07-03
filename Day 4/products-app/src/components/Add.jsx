import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { addPlayer } from '../service/data';

const AddSchema = Yup.object({
    name: Yup.string().trim().required('Name is required'),
    price: Yup.number()
        .typeError('Price must be a number')
        .positive('Price must be greater than zero')
        .required('Price is required'),
});

function Add({ onAdd }) {
    return (
        <div className="container">
            <h2>Add a player</h2>
            <Formik
                initialValues={{ name: '', price: '' }}
                validationSchema={AddSchema}
                onSubmit={(values, { resetForm }) => {
                    if (addPlayer(values)) {
                        toast.success(`Player ${values.name} added successfully!`);
                        resetForm();
                        if (onAdd) {
                            onAdd();
                        }
                    }
                }}
            >
                <Form>
                    <div className="form-field">
                        <Field type="text" name="name" placeholder="Name" />
                        <ErrorMessage name="name" component="div" className="field-error" />
                    </div>
                    <div className="form-field">
                        <Field type="number" name="price" placeholder="Price" />
                        <ErrorMessage name="price" component="div" className="field-error" />
                    </div>
                    <button type="submit" className="btn-primary">Add</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Add;