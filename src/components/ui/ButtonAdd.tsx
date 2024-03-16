import React, { ReactNode, FC } from "react";
import {Button, Flex} from "antd";

const ButtonAdd: FC<{ children: ReactNode }> = ({ children }) => (
    <Flex wrap="wrap" gap="small" className="site-button-ghost-wrapper">
        <Button type="primary" ghost>
            {children}
        </Button>
    </Flex>
);

export default ButtonAdd;