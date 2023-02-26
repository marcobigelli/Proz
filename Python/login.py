# loginuser = "entra"
# senhauser = "abrir"

#     login = input("Digite seu login:  ")
#     if (login == loginuser):
#         senha = input("Digite sua senha  ")
#         if (login == loginuser) and (senha == senhauser):
#             print("Bem vindo ") + loginuser
#         else:
#             print("Login/Senha incorretos, tente novamente") 
#     else:
#         print("Usuário não cadastrado")
            
   

       

print('Cadastre-se se não for cadastrado!')

loop = "True"
while (loop == "True"):     
    arq = open('lista.txt', 'a')
    nome_usuario = input('Digite seu nome de usuário: ')

    arq.write('{}\n'.format(nome_usuario))

    print('Cadastro efetivado ,{}!'.format(nome_usuario)) 
    arq.close() 

    arq = open("lista.txt") 
    nome_login = input('Digite o seu nome de usuario: ')

    lista = arq.readlines()
    if nome_login + '\n' in lista:
        print("Bem vindo ao sistema, {}!".format(nome_login))
        break
    else:
        print("Login inválido")
    arq.close()     


# loop = 'true'
# while (loop == 'true'):
#     username = input("Please enter your username: ")
#     if (username == CorrectUsername):
#         password = input("Please enter your password: ")
#         if (password == CorrectPassword):
#             print("Logged in successfully as ") + username
#             loop = 'false'
#         else:
#             print("Password incorrect!")
#     else:
#         print ("Username incorrect!")