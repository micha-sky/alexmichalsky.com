import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

export default function Floater(props) {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "ppppp.png" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);
  console.log(data);

  return (
    <div className="floater">
      t̸̜́͌̑͘h̶̛͍̭̮͑̾̓̀̒̄̋͐̑i̵͖̦͙̺̥͔̽s̴̗͕̫̺̊̏̄͆͝͝ ̴̹̟̖̊͜î̶̧̪̬̹̟͐͐ͅş̴̛͈̠̝͔̏̋̓̿̒ ̷͔͍̮̰̔̔͝͝m̷̱̫̎͛͊̎̽͝e̴̟̠̠̞̺͎̯̲̰̮͛̈́̆̃̉̽̕͝ ̷̛͓̻͙1̵̼̖̝͇̐̍̽̃̿̔̽̕0̶̧͈̳̺̳̬̾̈́̂̐̾͐0̷̧̨̡̰̝̱̬͐̈́̔̒̀̕͘͘͠ ̷͖̙̦̲̐̒̉y̵̨̛͍̦͖̞̻̲͇̥͖͊͗e̷̳͆̌̇́̒͒̈́̀̕͜͝a̶̢̫̼̟̿̑̈́͐͗̇͘ŕ̶̻̳̞̳̘͈̖͚̲̓̅́͛̉́͆͜͝s̴̥͌̅ ̷̧̩͙̯̯͎̗̃́̉̇à̶̩̯͓̞͊̑́̌̓̒̚ǵ̵̛̬̳̯̀̐͂ǫ̵̗̹͖͎͓̝̗̟̊͊̈́̆̌̏̂̄̒̕ͅ
      <GatsbyImage
        image={data.allFile.nodes[0].childImageSharp.gatsbyImageData}
        alt={"hello"}
      />
    </div>
  );
}
