VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
RESET = "\033[0m"


class Log:
    def dispara_log(self, message):
        return message
    
class LogError:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f'{VERMELHO}{self.log.dispara_log(message)}{RESET}'

log = Log()
print(LogError(log).dispara_log("Lascou"))

