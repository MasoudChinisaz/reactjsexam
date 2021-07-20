import { Input, Form, Button, Space } from 'antd';
import { Formik, useFormik } from 'formik';
const FormItem = Form.Item;

interface IForm {
  username: string;
  password: string;
}

export default function FormikTest() {
  // TODO: make form work with formik , pass handleSubmit to onSubmit of formik
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // BONUS: adding validation has extra points
  // Resource: https://formik.org/docs/tutorial

  return (
    <div>
      <div>Simple Formik With Antd Inputs :: Edit src/pages/formik.tsx</div>
      <hr />
      {/* TODO: use Formik */}
      <form onSubmit={formik.handleSubmit}>
        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        <label htmlFor='username' >
          {' '}
          Username{' '}
        </label>
        <Input
          id='username'
          name='username'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.username}
          required
        />

        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        <label htmlFor='password'>Password</label>
        <Input
          id='password'
          name='password'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />

        <Space>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
          <button type='reset' onClick={(e) => formik.resetForm()}>
            {' '}
            Reset
          </button>
        </Space>
      </form>
    </div>
  );
}
