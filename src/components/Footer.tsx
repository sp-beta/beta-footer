import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { ReactNode } from 'react'


const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithNewsletter() {
  return (
    <Box bg="#F3F3F3">
      <Container as={Stack} maxW="1600px" py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              Logo
            </Box>
            <Text>
              Follow us on
            </Text>
            <Box>
              Icons
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Products</ListHeader>
            <Box as="a" href={'#'}>
              Short Links
            </Box>
            <Box as="a" href={'#'}>
              Link in bio
            </Box>
            <Box as="a" href={'#'}>
              Branded Links and Pages
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'#'}>
              About us
            </Box>
            <Box as="a" href={'#'}>
              What We are
            </Box>
            <Box as="a" href={'#'}>
              Know Our Story
            </Box>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={'#'}>
             {" FAQ's"}
            </Box>
            <Box as="a" href={'#'}>
              Contact Us
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'column'}>
            <Box as="a" href={'#'}>
              Input Element
            </Box>
            <Box as="a" href={'#'}>
              Button
            </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
        <Box textAlign="center" marginTop="65px">
        We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066v 
        </Box>
      </Container>
    </Box>
  )
}
