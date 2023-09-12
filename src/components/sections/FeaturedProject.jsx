import { Heading, Box } from "@chakra-ui/react"
import Project from "@/pages/projects"

const Featured = () =>{

    return(
        <>
        <Box mt={5} mb={5}>
            <Heading textAlign='center' fontSize='4xl' mb='5'>
            My Latest Project
            </Heading>
        </Box>
        <Project/> {/* still processing to make change*/}
        </>
        
    )
}

export default Featured