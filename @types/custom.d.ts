export {}

export type UserProps = {
    _id: string;
    name: string;
    email: string;
    password: string;
    avatar: {
        public_id: string;
        url: string;
    },
    role: string;
    isVerified: boolean;
    courses: Array<{ courseId: string }>;
    comparePassword: (password: string) => Promise<boolean>;
    SignAccessToken: () => string;
    SignRefreshToken: () => string;
};

declare global {
    namespace Express {
        export interface Request {
            user?: UserProps;
        }
    }
}

/*interface ExtendedRequest extends Request {
    user?: IUser;
}

export default ExtendedRequest;*/