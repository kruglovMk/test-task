import React, { ReactNode, FC } from "react";
import {Button, Flex} from "antd";

const ButtonOut: FC<{ children: ReactNode }> = ({ children }) => (
    <Flex wrap="wrap" gap="small" className="site-button-ghost-wrapper">
        <Button type="primary" danger ghost>
            {children}
        </Button>
    </Flex>
);

export default ButtonOut;