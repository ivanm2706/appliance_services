import emailjs from '@emailjs/browser';
import { DataEmailJsType } from '../types/DataEmailJsType';
import { PublicKey, ServiceID, TemplateID } from '../utils/emailJs';

export const sendEmail = async (data: DataEmailJsType) => {
  try {
    const request = await emailjs.send(
      ServiceID, //Service ID
      TemplateID, //Template ID
      data,
      PublicKey, //Public Key
    );

    console.log(request);
    return request;
  } catch {
    throw new Error('Error sending email');
  }
};
