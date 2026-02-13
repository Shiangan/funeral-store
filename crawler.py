import requests
import json
from datetime import datetime

def fetch_funeral_data():
    # 這裡未來可以接入各縣市 API
    # 目前先以「當日測試資料」確保您的網頁能跑通
    today = datetime.now().strftime('%Y-%m-%d')
    
    # 實際營運時，這裡會透過 requests.get() 抓取政府官網資料
    data = {
        today: [
            {"name": "張○山", "hall": "景行廳", "time": "08:30", "gender": "male"},
            {"name": "李○美", "hall": "至德廳", "time": "10:00", "gender": "female"},
            {"name": "王○明", "hall": "懷德廳", "time": "13:00", "gender": "male"}
        ]
    }
    return data

if __name__ == "__main__":
    try:
        results = fetch_funeral_data()
        with open('funeral_data.json', 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=4)
        print("Success: Data updated.")
    except Exception as e:
        print(f"Error: {e}")
