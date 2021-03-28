import React from 'react';
import { MyComponent } from '../context';

class Asss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <i>
        {this.context}
      </i>
    )
  }
}
Asss.contextType = MyComponent;
export default Asss;

// export default function Asss(props) {
//   return (
//     <div>
//       <Consumer>
//         {
//           (name) => (
//             <i>{name}</i>
//           )
//         }
//       </Consumer>
//     </div>
//   )
// }