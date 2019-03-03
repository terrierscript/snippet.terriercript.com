// @ts-nocheckss
import React from "react"
import { MetaHeader } from "../app/meta/MetaHeader"
import { BlogProvider } from "./provider/BlogLayout"

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="ja">
        <MetaHeader {...this.props} />
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}