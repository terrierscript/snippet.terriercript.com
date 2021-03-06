import React from "react"
import { SideProfile } from "./Profile"
import { TagCloud } from "./TagCloud"
import { Externals } from "./Externals"
import { SideLinks } from "./Link"
import styled from "@emotion/styled"
import { Divider, Grid, Box } from "@chakra-ui/core"

const SideGrid = styled.aside`
  display: grid;
  grid-gap: 1em;
  /* border-left: 1px solid #efefef; */
  @media screen and (max-width: 65em) {
    width: 100%;
  }
`

const HideIfMobile = styled.div`
  @media screen and (max-width: 65em) {
    display: none;
  }
`

export const Side = () => {
  return (
    <Grid>
      <Box>
        <Divider orientation="vertical" />
      </Box>
      <SideGrid>
        <SideProfile />
        <SideLinks />
        <HideIfMobile>
          {/* <Externals /> */}
          {/* <TagCloud /> */}
        </HideIfMobile>
      </SideGrid>
    </Grid>
  )
}
