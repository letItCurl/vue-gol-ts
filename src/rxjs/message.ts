import { Subject } from 'rxjs';

const subject = new Subject();

export const dataBus = {
    sendMessage: (message: any) => subject.next({ message }),
    clearMessages: () => subject.next(),
    getMessage: () => subject.asObservable()
};