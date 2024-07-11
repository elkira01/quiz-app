import styled from "styled-components";
import {InputWrapper} from "@/app/shared/components/inputs/_styles";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 5px;
`

export default function SearchArea({ props }: any){

    return <Container>
        <div className='basis-1/5'>
            <InputWrapper $rounded='hight' type='text'></InputWrapper>
        </div>
        <div className='basis-4/5'>
            <div className='absolute w-[310px]'>
                <Card>
                    <CardHeader>
                        <CardTitle>Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                        Empty results
                    </CardContent>
                </Card>
            </div>
        </div>
    </Container>
}