import React from "react";
import { render } from "@testing-library/react";
import {Dashboard} from "./Dashboard";
import "@testing-library/react/cleanup-after-each";



describe('<Dashboard />', ()=> {
    it('renders Dashboard', () => {
        render(<Dashboard />)
    })
})