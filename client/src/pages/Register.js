import Logo from '../components/Logo'
import Wrapper from '../wrappers/RegisterPage'
import FormRow from '../components/FormRow'

const Register = () => {
  return (
    <Wrapper className='full-page'>
        <form className='form'>
            <Logo />
            <h3>Register</h3>
            <FormRow />
        </form>
    </Wrapper>
  )
}
export default Register