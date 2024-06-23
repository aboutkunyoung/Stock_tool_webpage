from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    initial_price = float(data['initial_price'])
    initial_shares = float(data['initial_shares'])
    additional_price = float(data['additional_price'])
    additional_shares = float(data['additional_shares'])
    
    total_shares = initial_shares + additional_shares
    average_price = ((initial_price * initial_shares) + (additional_price * additional_shares)) / total_shares
    
    return jsonify({'average_price': average_price})

if __name__ == '__main__':
    app.run(debug=True)
