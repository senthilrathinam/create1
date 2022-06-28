import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <h1>This is my deployed app abc</h1>
      <h1>Hello {user.username}</h1>

       <h2>Example.com - Employee Portal</h2>
        <h3>Current shipment stats</h3>
            <iframe
            width="960"
            height="720"
            src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/306802105982/dashboards/f4d6ae71-0e57-471b-877a-8f598785a670?directory_alias=senthil-quicksight-account1">
        </iframe>

      <h2><button onClick={signOut}>Sign out</button></h2>
    </>
  );
}

export default withAuthenticator(App);