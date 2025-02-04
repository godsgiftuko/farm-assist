import { Appointment } from 'src/appointment/entities/appointment.entity';
import { ProfileInformation } from 'src/user/profile-information/entities/profile-information.entity';
import { User } from 'src/user/user.entity';
import { FarmAssistAppointmentProviders } from 'src/appointment/enums/appointment-providers.enum';
import { IJoinAppointment } from 'src/appointment/interfaces/appointment.service.interfaces';

export type MailOptions = {
  from: string;
  to: string;
  text?: string;
  html?: string;
  subject: string;
  source?: string;
  user?: User;
};

export enum EMailSource {
  FARM_ASSIST = 'Farm Assist',
}

export type MailSourceType = keyof typeof EMailSource;

export type MailContentTypes = 'text/plain' | 'application/pdf' | 'image/gif';

export interface MailAttachment {
  encoding: 'base64';
  filename: string;
  content: string; // base64 value
  contentType: MailContentTypes;
}

export interface IFailedOauthTokenMail {
  message: string;
  subject?: string;
  provider: FarmAssistAppointmentProviders;
}

export interface IEmailService {
  sendMail(inputs: MailOptions): Promise<void>;
  sendOTPMail(user: User): Promise<void>;
  sendResetPasswordMail(email: string, resetPasswordUrl: string): Promise<void>;
  sendAppointmentMail(appointment: Appointment): Promise<void>;
  sendAppointmentCancellationMail(appointment: Appointment): Promise<void>;
  sendAppointmentAcceptanceMail(
    guest: ProfileInformation,
    appointment: Appointment,
  ): Promise<void>;
  sendAppointmentRejectionMail(
    guest: ProfileInformation,
    appointment: Appointment,
  ): Promise<void>;
  sendFailedTokenGenerationMail(inputs: IFailedOauthTokenMail): Promise<void>;
  mailGuestsToJoinAppointment(
    iJoinAppointment: IJoinAppointment,
  ): Promise<void>;
}
