import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'


type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required("Senha obrigatória").min(8, 'Mínimo 8 caracteres'),
})



export default function SignIn() {
  const {handleSubmit, register, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });  

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
      await new Promise(resolve => setTimeout(resolve, 500))

      console.log(values);
  }

  const error = formState.errors;

  return (
    <Flex 
    w="100vw"
    h="100vh"
    align="center"
    justify="center"
    >
      <Flex 
      as="form" 
      width="100%"
      maxWidth={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      onSubmit={handleSubmit(handleSignIn)}
      > 
      <Stack spacing="4">

      <Input 
      error={error.email}
      name="email" 
      type="email" 
      label="E-mail" 
      {...register('email')}
      />

      <Input 
      error={error.password}
      name="password" 
      type="password" 
      label="Senha" 
      {...register('password')} 
      />

       </Stack>
        <Button 
        type="submit" 
        mt="6" size="lg" 
        colorScheme="pink" 
        isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
    )
}
