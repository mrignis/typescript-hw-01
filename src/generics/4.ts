type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Оновлення користувача
  return { 
    name: initialValues.name || '', 
    surname: initialValues.surname || '', 
    email: initialValues.email || '', 
    password: initialValues.password || '' 
  };
}

const updatedUser: User = createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});

console.log(updatedUser); // Виведе: { name: '', surname: '', email: 'user@mail.com', password: 'password123' }
