import { TodoManager } from "../kodutöö";

let mgr: TodoManager;

beforeEach(() => {
    mgr = new TodoManager("TestUser");
});

test("pole tekste", () => {
    expect(mgr.entries).toHaveLength(0);
});

test('add() lisab teksti', () => {
    const msg = mgr.add('Test');
    expect(msg).toBe('Task lisatud');

    const all = mgr.getEntries();
    expect(all).toHaveLength(1);
    expect(all[0]).toMatchObject({
      id: 0,
      name: 'TestUser',
      text: 'Test',
      tehtud: false
    });
});

test('remove() võtab sisestatud ära', () => {
    mgr.add('Test');
    expect(mgr.remove(0)).toBe('Task kustutatud');
})

test('remove() annab tundmatu id korral "Taski ei leitud"', () => {
    expect(mgr.remove(42)).toBe('Taski ei leitud');
});

test('toggle() muudab tehtud ja tegemata vahel', () => {
    mgr.add('lülita mind');
    const entry0 = mgr.getEntries()[0];
    expect(entry0.tehtud).toBe(false);

    expect(mgr.toggle(0)).toBe(true);
    expect(mgr.getEntries()[0].tehtud).toBe(true);

    expect(mgr.toggle(0)).toBe(true);
    expect(mgr.getEntries()[0].tehtud).toBe(false);
});


