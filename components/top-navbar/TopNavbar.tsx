import { Center } from '@chakra-ui/react'
import { Logo } from 'components/logo'

function TopNavbar() {
  return (
    <Center h="5rem" border="1px" borderColor="green">
      <Logo color="blue" />
    </Center>
  )
}

export { TopNavbar }
