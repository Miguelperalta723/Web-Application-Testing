import React from "react";
import { render } from "@testing-library/react";
import {Display} from "./Display";
import "@testing-library/react/cleanup-after-each";

describe('<Display />', () => {
    it('renders display', () => {
        render(<Display />)
    })
})
