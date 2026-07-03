import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import List from './List';

const SearchSchema = Yup.object({
    query: Yup.string().trim().required('Search query is required'),
});

function Search({ results = [], onSearch, refresh, showResults = false }) {
    return (
        <>
            <Formik
                initialValues={{ query: '' }}
                validationSchema={SearchSchema}
                onSubmit={(values) => {
                    if (onSearch) {
                        onSearch(values.query);
                    }
                }}
            >
                <Form className="search-form">
                    <div className="form-field">
                        <Field type="text" name="query" placeholder="Search players" />
                        <ErrorMessage name="query" component="div" className="field-error" />
                    </div>
                    <button type="submit" className="btn-secondary">Search</button>
                </Form>
            </Formik>
            {showResults && <List players={results} refresh={refresh} />}
        </>
    );
}

export default Search;