import React, { Component } from 'react';
import logo from './logo.svg';
import 'carbon-components/scss/globals/scss/styles.scss';


import { Breadcrumb, BreadcrumbItem, BreadcrumbSkeleton, DataTable } from 'carbon-components-react';
import SimpleDataTable from './SimpleDataTable'



class App extends Component {
  render() {
    return (
      <div className="App">

        <Breadcrumb className="some-class" noTrailingSlash={false} onClick={() => console.log('clicked')}>
          <BreadcrumbItem>
            <a href="/#">
              Breadcrumb 1
          </a>
          </BreadcrumbItem>
          <BreadcrumbItem href="#">
            Breadcrumb 2
          </BreadcrumbItem>
          <BreadcrumbItem href="#">
            Breadcrumb 3
          </BreadcrumbItem>
        </Breadcrumb>
        <SimpleDataTable></SimpleDataTable>

        

      </div>
    );
  }
}

export default App;
