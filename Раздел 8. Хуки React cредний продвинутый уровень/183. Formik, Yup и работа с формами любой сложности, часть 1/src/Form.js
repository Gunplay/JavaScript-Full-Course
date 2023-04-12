import { useFormik } from 'formik'
import * as Yup from 'yup'

// const validate = (values) => {
//   const errors = {}

//   if (!values.name) {
//     errors.name = 'Required Field!'
//   } else if (values.name.length < 2) {
//     errors.name = 'Min two simbols'
//   }

//   if (!values.email) {
//     errors.email = 'Required Field!'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = 'Wrong email adress'
//   }

//   return errors // very important  transfer object error in the func validate !!! Because we are useing validates in the FORM
// }
const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      amount: 0,
      currency: '',
      text: '',
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, 'Min two simbols!').required('required!'),
      email: Yup.string().email('Wrong email adress').required('required!'),
      amount: Yup.number().min(5, 'more then 5'),
      currency: Yup.string().required('Select currency!'),
      text: Yup.string().min(10, 'at least 10'),
      terms: Yup.boolean()
        .required('consent required!')
        .oneOf([true], 'consent required!'),
    }),
    // validate, // func will be start when work func handleChange!!!
    onSubmit: (value) => console.log(JSON.stringify(value, null, 2)), // onSubmit={formik.handleSubmit}>
  })

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Отправить пожертвование</h2>
      <label htmlFor="name">Ваше имя</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.name && formik.touched.name ? (
        <div className="error">
          {/* only with interaction and only then will be get mistake on this input */}
          {formik.errors.email}
        </div>
      ) : null}
      <label htmlFor="email">Ваша почта</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} // it is works when we are went to the focus
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}
      <label htmlFor="amount">Количество</label>
      <input
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.amount && formik.touched.amount ? (
        <div className="error">
          {/* only with interaction and only then will be get mistake on this input */}
          {formik.errors.amount}
        </div>
      ) : null}
      <label htmlFor="currency">Валюта</label>
      <select
        id="currency"
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="">Выберите валюту</option>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">EVR</option>
      </select>
      {formik.errors.currency && formik.touched.currency ? (
        <div className="error">
          {/* only with interaction and only then will be get mistake on this input */}
          {formik.errors.currency}
        </div>
      ) : null}
      <label htmlFor="text">Ваше сообщение</label>
      <textarea
        id="text"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.text && formik.touched.text ? (
        <div className="error">
          {/* only with interaction and only then will be get mistake on this input */}
          {formik.errors.text}
        </div>
      ) : null}
      <label className="checkbox">
        <input
          name="terms"
          type="checkbox"
          value={formik.values.terms}
          onChange={formik.handleChange}
        />
        Соглашаетесь с политикой конфиденциальности?
      </label>
      {formik.errors.terms && formik.touched.terms ? (
        <div className="error">
          {/* only with interaction and only then will be get mistake on this input */}
          {formik.errors.terms}
        </div>
      ) : null}
      <button type="submit">Отправить</button>
    </form>
  )
}

export default Form
