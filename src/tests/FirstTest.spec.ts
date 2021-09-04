import { User } from "../models/User";

test('It should be ok', () => {
    const user = new User();

    user.name = 'Carlos';

    expect(user.name).toEqual('Carlos')
})
