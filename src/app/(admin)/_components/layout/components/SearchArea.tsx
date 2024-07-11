import styled from "styled-components";
import {InputWrapper} from "@/app/shared/components/inputs/_styles";
import SearchInput from "@/app/shared/components/inputs/SearchInput/SearchInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 5px;
`

export default function SearchArea({ props }: any){

    return <Container>
        <div className='basis-1/5'>
            <SearchInput searchAction={() => {}}/>
        </div>
        {/*<div className='basis-4/5'>*/}
        {/*    <div className='absolute'>*/}
        {/*        <Card>*/}
        {/*            <CardHeader>*/}
        {/*                <CardTitle>Results</CardTitle>*/}
        {/*            </CardHeader>*/}
        {/*            <CardContent>*/}
        {/*                Empty results*/}
        {/*            </CardContent>*/}
        {/*        </Card>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </Container>
}