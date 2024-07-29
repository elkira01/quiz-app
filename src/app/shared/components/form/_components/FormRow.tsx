import React from "react";
import {Row} from "@/app/shared/components/form/_components/Row";
import styled from "styled-components";
import {FormCol} from "@/app/shared/components/form/_components/FormCol";

const Component = styled<any>(Col)`
    padding: ${props => props.$padding ?? ''};
`

;
export const FormRow = ({ children }: { children: React.ReactNode[] }) => {

    return<Row $justify='space-between'>
        {children.map((child) => child)}
    </Row>
}