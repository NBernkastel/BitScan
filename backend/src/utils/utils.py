def seconds_to_hh_mm_ss(seconds):
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = seconds % 60
    return "{:02}:{:02}:{:02}".format(hours, minutes, seconds)


def satoshi_to_BTC(amount: int) -> float:
    return round(amount * 10 ** -8, 8)
