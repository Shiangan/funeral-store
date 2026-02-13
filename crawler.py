import requests
import json
from datetime import datetime

# 模擬抓取台北市殯葬處公開資料 (以台北二殯為例)
def fetch_taipei_funeral():
    # 這裡對接政府開放資料 API 或 網頁解析邏輯
    # 範例資料格式
    today = datetime.now().strftime('%Y-%m-%d')
    mock_data = {
        today: [
            {"name": "陳府大山", "hall": "景行廳", "time": "08:00", "gender": "male"},
            {"name": "王府淑芬", "hall": "至德廳", "time": "10:00", "gender": "female"},
            {"name": "李府金城", "hall": "崇義廳", "time": "13:30", "gender": "male"}
        ]
    }
    return mock_data

def save_data():
    data = fetch_taipei_funeral()
    with open('funeral_data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    save_data()
