export const errorHandler = ({ message, formErrors }: { message: any; formErrors?: string[] }, cb: Function) => {
	if (!(message.response && 'data' in message.response)) return;
	if (message.response.status === 500) return;
	Object.entries(message.response.data).forEach(([key, err]) => {
		if (Array.isArray(err) && !formErrors?.length) cb(err[0], key);
		else if (Array.isArray(err) && formErrors?.length) {
			formErrors.forEach((name, index) => {
				if (index === formErrors.length - 1) cb(err[0], name);
				else cb(true, name);
			});
		} else cb(err, key);
	});
};
