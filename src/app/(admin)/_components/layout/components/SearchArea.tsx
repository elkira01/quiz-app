import styled from "styled-components";
import {InputWrapper} from "@/app/shared/components/inputs/_styles";
import SearchInput from "@/app/shared/components/inputs/SearchInput/SearchInput";
import {fetchAllUser} from "@/backend/ui/user/controller/userController";
import React, {useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 5px;
`

export default function SearchArea({ props }: any){
    const [result, setResult] = useState<any[]>([])
    const list = async (query: any) => {
        let response: any

        try {
            response = await fetchAllUser(query)
            setResult(response)
        }
        catch (e: any) {
            console.log(e.message)
        }
    }

    return <Container>
        <div className='basis-1/5'>
            <SearchInput placeholder='Type something' searchAction={list}/>
        </div>
        <div className='basis-4/5'>
            <div className='absolute w-[330px]'>
                {result.length > 0 &&
                    <Card>
                        <CardHeader>
                            <CardTitle>Results</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {result.map((r: any) =>
                                <div>{r.name} {r.email}</div>
                            )}
                        </CardContent>
                    </Card>
                }
            </div>
        </div>
    </Container>
}