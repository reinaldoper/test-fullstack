export const validateCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11) return false;


  if (/^(\d)\1+$/.test(cpf)) return false;


  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = 11 - (soma % 11);
  const digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;
  if (digitoVerificador1 !== parseInt(cpf.charAt(9))) return false;


  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  const digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;
  if (digitoVerificador2 !== parseInt(cpf.charAt(10))) return false;

  return true;
}

export const  validaTePhone = (phone: string): boolean => {
  
  const regex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

  return regex.test(phone);
}


export const validateStatus = (status: string): string => {
  switch (status) {
    case 'Ativo':
      return 'ativo';
      break;
    case 'Aguardando ativação':
      return 'aguardando';
      break;
    case 'Inativo':
      return 'inativo';
      break;
    case 'Desativado':
      return 'desativado';
      break;
    default:
      return 'error';
  }
}