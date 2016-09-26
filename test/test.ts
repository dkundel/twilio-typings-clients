import { AccessManager } from 'twilio-common';
import { Client } from 'twilio-ip-messaging';

const accessManager = new AccessManager('ACXXXX');

const client = new Client(accessManager);
